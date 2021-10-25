import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib(process.env);

(async () => {
    const startingBal = stdlib.parseCurrency(100);
    const accAlice = await stdlib.newTestAccount(startingBal);
    const accBob = await stdlib.newTestAccount(startingBal);

    const ctcAlice = accAlice.deploy(backend);
    const ctcBob = accBob.attach(backend, ctcAlice.getInfo());

    const HAND = ['Rock', 'Paper', 'Scissors'];
    const OUTCOME = ['Bob Wins', 'Draw', 'Alice Wins'];

    const Player = (Who) => ({
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
        }),
        backend.Bob(ctcBob, {
            //implement bob
            ...Player('Bob'),
        }),
    ]);
}) ();