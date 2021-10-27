import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
    const startingBal = stdlib.parseCurrency(100);
    const accAlice = await stdlib.newTestAccount(startingBal);
    const accBob = await stdlib.newTestAccount(startingBal);

    const fmt = (x) => stdlib.formatCurrency(x, 4);
    const getBal = async (who) => fmt(await stdlib.balanceOf(who));
    const beforeAl = await getBal(accAlice);
    const beforeBob = await getBal(accBob);

    const ctcAlice = accAlice.deploy(backend);
    const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

    const HAND = ['Rock', 'Paper', 'Scissors'];
    const OUTCOME = ['Bob Wins', 'Draw', 'Alice Wins'];

    const Player = (Who) => ({
        ...stdlib.hasRandom,
        getHand: () => {
            const hand = Math.floor(Math.random() * 3);
            console.log(`${Who} played ${HAND[hand]}`);
            return hand;
        },
        seeOutcome: (outcome) => {
            console.log(`${Who} saw outcome ${OUTCOME[outcome]}`)
        }
    });

    await Promise.all([
        backend.Alice(ctcAlice, {
            //implement alice
            ...Player('Alice'),
            wager: stdlib.parseCurrency(5),
        }),
        backend.Bob(ctcBob, {
            //implement bob
            ...Player('Bob'),
            acceptWager: (amt) => {
                console.log(`Bob accepts the wager of ${fmt(amt)}.`);
            },
        }),
    ]);

    const afterAlice = await getBal(accAlice);
    const afterBob = await getBal(accBob);

    console.log(`Alice went from ${beforeAl} to ${afterAlice}`);
    console.log(`Bob went from ${beforeBob} to ${afterBob}`);
}) ();