import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import { renderDOM, renderView } from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import {loadStdlib} from '@reach-sh/stdlib';

const reach = loadStdlib(process.env);


const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '3', standardUnit};


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view: 'ConnectAccount', ...defaults};
    }
    async componentDidMount() {
      const acc = await reach.getDefaultAccount();
      const balAtomic = await reach.balanceOf(acc);
      const bal = reach.formatCurrency(balAtomic, 4);
      this.setState({acc, bal});
      if (await reach.canFundFromFaucet()) {
        this.setState({view: 'FundAccount'});
      } else {
        this.setState({view: 'DeployerOrAttacher'});
      }
    }

    async fundAccount(fundAmount) {
        await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
        this.setState({view: 'DeployerOrAttacher'});
    }

    async skipFundAccount() {
        this.setState({view: 'DeployerOrAttacher'});
    }

    selectAttacher() { 
        this.setState({view: 'Wrapper', ContentView: Attacher}); 
    }
    selectDeployer() { 
        this.setState({view: 'Wrapper', ContentView: Deployer}); 
    }

    render() { 
        return renderView(this, AppViews); 
    }
}

class Player extends React.Component {
    random() {
        return reach.hasRandom.random();
    }

    async getHand() {
        const hand = await new Promise(resolveHandP => {
            this.setState({view: 'GetHand', playable: true, resolveHandP});
        });
        this.setState({view: 'WaitingForResults', hand});
        return handToInt[hand];
    }

    seeOutcome(i) {
        this.setState({view: 'Done', outcome: intToOutcome[i]});
    }

    informTimeout() {
        this.setState({view: 'Timeout'});
    }

    playHand(hand) {
        this.state.resolveHandP(hand);
    }
}

class Deployer extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'SetWager'};
    }
    setWager(wager) { 
        this.setState({view: 'Deploy', wager}); 
    }
    async deploy() {
        const ctc = this.props.acc.deploy(backend);
        this.setState({view: 'Deploying', ctc});
        this.wager = reach.parseCurrency(this.state.wager);
        this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector];
        backend.Alice(ctc, this);
        const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
        this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    }
    render() { 
        return renderView(this, DeployerViews); 
    }
}

class Attacher extends Player {
    constructor(props) {
        super(props);
        this.state = {view: 'Attach'};
    }
    attach(ctcInfoStr) {
        const ctc = this.props.acc.attach(backend, JSON.parse(ctcInfoStr));
        this.setState({view: 'Attaching'});
        backend.Bob(ctc, this);
    }
    async acceptWager(wagerAtomic) {
        const wager = reach.formatCurrency(wagerAtomic, 4);
        return await new Promise(resolveAcceptedP => {
            this.setState({view: 'AcceptTerms', wager, resolveAcceptedP});
        });
    }
    termsAccepted() {
        this.state.resolveAcceptedP();
        this.setState({view: 'WaitingForTurn'});
    }
    render() { 
        return renderView(this, AttacherViews); 
    }
}
  
renderDOM(<App />);

// (async () => {
//     const isAlice = await ask(
//         `Are you Alice?`,
//         yesno
//     );

//     const who = isAlice ? 'Alice' : 'Bob';
//     console.log(`Starting Rock, Paper, Scissors as ${who}`);

//     let acc = null;
//     const createAcc = await ask(
//         `Would you like to create an account? (only possible on devnet)`,
//         yesno
//     );
//     if(createAcc) {
//         acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
//     }else{
//         const secret = await ask(
//             `What is your account secret?`,
//             (x => x)
//         );
//         acc = await stdlib.newAccountFromSecret(secret);
//     }

//     let ctc = null;
//     const deployCtc = await ask(
//         `Do you want to deploy the contract? (y/n)`,
//         yesno
//     );
//     if(deployCtc) {
//         ctc = acc.deploy(backend);
//         ctc.getInfo().then((info) => {
//             console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
//         });
//     } else {
//         const info = await ask(
//             `Please paste the contract information`,
//             JSON.parse
//         );
//         ctc = acc.attach(backend, info);
//     }

//     const fmt = (x) => stdlib.formatCurrency(x, 4);
//     const getBal = async () => fmt(await stdlib.balanceOf(acc));
//     const before = await getBal();
//     console.log(`Your balance is ${before}`);

//     const interact = {...stdlib.hasRandom};

//     interact.informTimeout = () => {
//         console.log(`There was a timeout.`);
//         process.exit(1);
//     };

//     if(isAlice) {
//         const amt = await ask(
//             `How much do you want to wager?`,
//             stdlib.parseCurrency
//         );
//         interact.wager = amt;
//         interact.deadline = {ETH : 100, ALGO : 100, CFX : 1000}[stdlib.connector];
//     } else {
//         interact.acceptWager = async (amt) => {
//             const accepted = await ask(
//                 `Do you accept wager of ${fmt(amt)}?`,
//                 yesno
//             );
//             if (!accepted) {
//                 process.exit(0);
//             }
//         };
//     }

//     const HAND = ['Rock', 'Paper', 'Scissors'];
//     const HANDS = {
//         'Rock' : 0, 'R' : 0, 'r' : 0,
//         'Paper' : 1, 'P' : 1, 'p' : 1,
//         'Scissors' : 2, 'S' : 2, 's' : 2,
//     };

//     interact.getHand = async () => {
//         const hand = await ask(
//             `What hand will you play?`,
//             (x) => {
//                 const hand = HANDS[x];
//                 if (hand == null) {
//                     throw Error(`Not a valid hand ${hand}`);
//                 }
//                 return hand;
//             }
//         );
//         console.log(`You played ${HAND[hand]}`);
//         return hand;
//     };

//     const OUTCOME = ['Bob Wins', 'Draw', 'Alice Wins'];
//     interact.seeOutcome = async (outcome) => {
//         console.log(`The outcome is: ${OUTCOME[outcome]}`);
//     };

//     const part = isAlice ? backend.Alice : backend.Bob;
//     await part(ctc, interact);

//     const after = await getBal();
//     console.log(`Your balance is now ${after}`);

//     done();
// }) ();