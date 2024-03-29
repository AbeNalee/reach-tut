// Automatically generated with Reach 0.1.6
/* eslint-disable */
export const _version = '0.1.6';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v263 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v264 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v264, v263],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:54:11:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v264, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v268, v269], secs: v271, time: v270, didSend: v52, from: v267 } = txn1;
      
      sim_r.txns.push({
        amt: v268,
        kind: 'to',
        tok: undefined
        });
      const v275 = stdlib.add(v270, v269);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v268, v269], secs: v271, time: v270, didSend: v52, from: v267 } = txn1;
  ;
  const v275 = stdlib.add(v270, v269);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v275],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v267, v268, v269, v275],
      evt_cnt: 0,
      funcNum: 2,
      lct: v270,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v414, time: v413, didSend: v223, from: v412 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v416 = stdlib.addressEq(v267, v412);
        stdlib.assert(v416, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:62:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v268,
          kind: 'from',
          to: v267,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v414, time: v413, didSend: v223, from: v412 } = txn3;
    ;
    const v416 = stdlib.addressEq(v267, v412);
    stdlib.assert(v416, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:62:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:46:35:application',
      fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:62:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v281, time: v280, didSend: v61, from: v279 } = txn2;
    const v283 = stdlib.add(v268, v268);
    ;
    let v284 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v285 = v280;
    let v292 = v283;
    
    while ((() => {
      const v300 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v300;})()) {
      const v302 = stdlib.add(v285, v269);
      const v306 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:70:48:application',
        fs: ['at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:23:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v307 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:57:31:application',
        fs: ['at ./index.rsh:71:62:application call to "makeCommitment" (defined at: reach standard library:56:8:function exp)', 'at ./index.rsh:69:19:application call to [unknown function] (defined at: ./index.rsh:69:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v308 = stdlib.digest(ctc1, [v307, v306]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v267, v268, v269, v279, v292, v302, v308],
        evt_cnt: 1,
        funcNum: 5,
        lct: v285,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v311], secs: v313, time: v312, didSend: v88, from: v310 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v315 = stdlib.addressEq(v267, v310);
          stdlib.assert(v315, {
            at: './index.rsh:74:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v317 = stdlib.add(v312, v269);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v302],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 6,
          out_tys: [],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v381, time: v380, didSend: v181, from: v379 } = txn4;
        ;
        const v383 = stdlib.addressEq(v279, v379);
        stdlib.assert(v383, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:75:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:46:35:application',
          fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:75:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v311], secs: v313, time: v312, didSend: v88, from: v310 } = txn3;
        ;
        const v315 = stdlib.addressEq(v267, v310);
        stdlib.assert(v315, {
          at: './index.rsh:74:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v317 = stdlib.add(v312, v269);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 7,
          out_tys: [ctc0],
          timeoutAt: ['time', v317],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v267, v268, v269, v279, v292, v311, v317],
            evt_cnt: 0,
            funcNum: 8,
            lct: v312,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [], secs: v364, time: v363, didSend: v155, from: v362 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v366 = stdlib.addressEq(v267, v362);
              stdlib.assert(v366, {
                at: 'reach standard library:206:7:dot',
                fs: ['at ./index.rsh:84:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              sim_r.txns.push({
                amt: v292,
                kind: 'from',
                to: v267,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v364, time: v363, didSend: v155, from: v362 } = txn5;
          ;
          const v366 = stdlib.addressEq(v267, v362);
          stdlib.assert(v366, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:84:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:46:35:application',
            fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:84:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v323], secs: v325, time: v324, didSend: v99, from: v322 } = txn4;
          ;
          const v327 = stdlib.addressEq(v279, v322);
          stdlib.assert(v327, {
            at: './index.rsh:83:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v329 = stdlib.add(v324, v269);
          const txn5 = await (ctc.sendrecv({
            args: [v267, v268, v269, v279, v292, v311, v323, v329, v306, v307],
            evt_cnt: 2,
            funcNum: 9,
            lct: v324,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
              
              const {data: [v334, v335], secs: v337, time: v336, didSend: v110, from: v333 } = txn5;
              
              sim_r.txns.push({
                amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
                kind: 'to',
                tok: undefined
                });
              const v339 = stdlib.addressEq(v267, v333);
              stdlib.assert(v339, {
                at: './index.rsh:91:15:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v340 = stdlib.digest(ctc1, [v335, v334]);
              const v341 = stdlib.digestEq(v311, v340);
              stdlib.assert(v341, {
                at: 'reach standard library:62:17:application',
                fs: ['at ./index.rsh:93:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
                msg: null,
                who: 'Alice'
                });
              const v342 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v323);
              const v343 = stdlib.add(v334, v342);
              const v344 = stdlib.mod(v343, stdlib.checkedBigNumberify('./index.rsh:7:36:decimal', stdlib.UInt_max, 3));
              const cv284 = v344;
              const cv285 = v336;
              const cv292 = v292;
              
              (() => {
                const v284 = cv284;
                const v285 = cv285;
                const v292 = cv292;
                
                if ((() => {
                  const v300 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  
                  return v300;})()) {
                  const v302 = stdlib.add(v285, v269);
                  sim_r.isHalt = false;
                  }
                else {
                  const v396 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                  const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:14:decimal', stdlib.UInt_max, 2), v268);
                  const v401 = v396 ? v267 : v279;
                  sim_r.txns.push({
                    amt: v399,
                    kind: 'from',
                    to: v401,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v329],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 0,
              funcNum: 10,
              out_tys: [],
              timeoutAt: undefined,
              waitIfNotPresent: false
              }));
            const {data: [], secs: v347, time: v346, didSend: v129, from: v345 } = txn6;
            ;
            const v349 = stdlib.addressEq(v279, v345);
            stdlib.assert(v349, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:92:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:46:35:application',
              fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:92:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v334, v335], secs: v337, time: v336, didSend: v110, from: v333 } = txn5;
            ;
            const v339 = stdlib.addressEq(v267, v333);
            stdlib.assert(v339, {
              at: './index.rsh:91:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v340 = stdlib.digest(ctc1, [v335, v334]);
            const v341 = stdlib.digestEq(v311, v340);
            stdlib.assert(v341, {
              at: 'reach standard library:62:17:application',
              fs: ['at ./index.rsh:93:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v342 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v323);
            const v343 = stdlib.add(v334, v342);
            const v344 = stdlib.mod(v343, stdlib.checkedBigNumberify('./index.rsh:7:36:decimal', stdlib.UInt_max, 3));
            const cv284 = v344;
            const cv285 = v336;
            const cv292 = v292;
            
            v284 = cv284;
            v285 = cv285;
            v292 = cv292;
            
            continue;}
          
          }
        
        }
      
      }
    const v396 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:14:decimal', stdlib.UInt_max, 2), v268);
    const v401 = v396 ? v267 : v279;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v284), {
      at: './index.rsh:104:28:application',
      fs: ['at ./index.rsh:103:9:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v268, v269], secs: v271, time: v270, didSend: v52, from: v267 } = txn1;
  ;
  const v275 = stdlib.add(v270, v269);
  stdlib.protect(ctc1, await interact.acceptWager(v268), {
    at: './index.rsh:59:29:application',
    fs: ['at ./index.rsh:58:13:application call to [unknown function] (defined at: ./index.rsh:58:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v267, v268, v269, v275],
    evt_cnt: 0,
    funcNum: 1,
    lct: v270,
    onlyIf: true,
    out_tys: [],
    pay: [v268, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v281, time: v280, didSend: v61, from: v279 } = txn2;
      
      const v283 = stdlib.add(v268, v268);
      sim_r.txns.push({
        amt: v268,
        kind: 'to',
        tok: undefined
        });
      const v284 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v285 = v280;
      const v292 = v283;
      
      if ((() => {
        const v300 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v300;})()) {
        const v302 = stdlib.add(v285, v269);
        sim_r.isHalt = false;
        }
      else {
        const v396 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
        const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:14:decimal', stdlib.UInt_max, 2), v268);
        const v401 = v396 ? v267 : v279;
        sim_r.txns.push({
          amt: v399,
          kind: 'from',
          to: v401,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v275],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v414, time: v413, didSend: v223, from: v412 } = txn3;
    ;
    const v416 = stdlib.addressEq(v267, v412);
    stdlib.assert(v416, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:62:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:46:35:application',
      fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:62:55:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v281, time: v280, didSend: v61, from: v279 } = txn2;
    const v283 = stdlib.add(v268, v268);
    ;
    let v284 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v285 = v280;
    let v292 = v283;
    
    while ((() => {
      const v300 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v300;})()) {
      const v302 = stdlib.add(v285, v269);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc2],
        timeoutAt: ['time', v302],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v267, v268, v269, v279, v292, v302],
          evt_cnt: 0,
          funcNum: 6,
          lct: v285,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [], secs: v381, time: v380, didSend: v181, from: v379 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v383 = stdlib.addressEq(v279, v379);
            stdlib.assert(v383, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:75:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            sim_r.txns.push({
              amt: v292,
              kind: 'from',
              to: v279,
              tok: undefined
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v381, time: v380, didSend: v181, from: v379 } = txn4;
        ;
        const v383 = stdlib.addressEq(v279, v379);
        stdlib.assert(v383, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:75:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:46:35:application',
          fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:75:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v311], secs: v313, time: v312, didSend: v88, from: v310 } = txn3;
        ;
        const v315 = stdlib.addressEq(v267, v310);
        stdlib.assert(v315, {
          at: './index.rsh:74:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v317 = stdlib.add(v312, v269);
        const v321 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:81:56:application',
          fs: ['at ./index.rsh:80:17:application call to [unknown function] (defined at: ./index.rsh:80:21:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v267, v268, v269, v279, v292, v311, v317, v321],
          evt_cnt: 1,
          funcNum: 7,
          lct: v312,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v323], secs: v325, time: v324, didSend: v99, from: v322 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v327 = stdlib.addressEq(v279, v322);
            stdlib.assert(v327, {
              at: './index.rsh:83:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v329 = stdlib.add(v324, v269);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v317],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 0,
            funcNum: 8,
            out_tys: [],
            timeoutAt: undefined,
            waitIfNotPresent: false
            }));
          const {data: [], secs: v364, time: v363, didSend: v155, from: v362 } = txn5;
          ;
          const v366 = stdlib.addressEq(v267, v362);
          stdlib.assert(v366, {
            at: 'reach standard library:206:7:dot',
            fs: ['at ./index.rsh:84:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:46:35:application',
            fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:84:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v323], secs: v325, time: v324, didSend: v99, from: v322 } = txn4;
          ;
          const v327 = stdlib.addressEq(v279, v322);
          stdlib.assert(v327, {
            at: './index.rsh:83:13:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v329 = stdlib.add(v324, v269);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 9,
            out_tys: [ctc0, ctc0],
            timeoutAt: ['time', v329],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v267, v268, v269, v279, v292, v311, v323, v329],
              evt_cnt: 0,
              funcNum: 10,
              lct: v324,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
                
                const {data: [], secs: v347, time: v346, didSend: v129, from: v345 } = txn6;
                
                sim_r.txns.push({
                  amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
                  kind: 'to',
                  tok: undefined
                  });
                const v349 = stdlib.addressEq(v279, v345);
                stdlib.assert(v349, {
                  at: 'reach standard library:206:7:dot',
                  fs: ['at ./index.rsh:92:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                sim_r.txns.push({
                  amt: v292,
                  kind: 'from',
                  to: v279,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: undefined,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v347, time: v346, didSend: v129, from: v345 } = txn6;
            ;
            const v349 = stdlib.addressEq(v279, v345);
            stdlib.assert(v349, {
              at: 'reach standard library:206:7:dot',
              fs: ['at ./index.rsh:92:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:46:35:application',
              fs: ['at ./index.rsh:45:13:application call to [unknown function] (defined at: ./index.rsh:45:31:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:44:30:function exp)', 'at ./index.rsh:92:59:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v334, v335], secs: v337, time: v336, didSend: v110, from: v333 } = txn5;
            ;
            const v339 = stdlib.addressEq(v267, v333);
            stdlib.assert(v339, {
              at: './index.rsh:91:15:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v340 = stdlib.digest(ctc3, [v335, v334]);
            const v341 = stdlib.digestEq(v311, v340);
            stdlib.assert(v341, {
              at: 'reach standard library:62:17:application',
              fs: ['at ./index.rsh:93:24:application call to "checkCommitment" (defined at: reach standard library:61:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v342 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:7:20:decimal', stdlib.UInt_max, 4), v323);
            const v343 = stdlib.add(v334, v342);
            const v344 = stdlib.mod(v343, stdlib.checkedBigNumberify('./index.rsh:7:36:decimal', stdlib.UInt_max, 3));
            const cv284 = v344;
            const cv285 = v336;
            const cv292 = v292;
            
            v284 = cv284;
            v285 = cv285;
            v292 = cv292;
            
            continue;}
          
          }
        
        }
      
      }
    const v396 = stdlib.eq(v284, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
    const v399 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:100:14:decimal', stdlib.UInt_max, 2), v268);
    const v401 = v396 ? v267 : v279;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v284), {
      at: './index.rsh:104:28:application',
      fs: ['at ./index.rsh:103:9:application call to [unknown function] (defined at: ./index.rsh:103:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 8
btoi
store 1
dup
substring 8 16
btoi
store 2
substring 16 48
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
// Handler 0
dup
int 0
==
bz l0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 48
==
assert
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:54:11:dot"
// "[]"
int 100000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1:
pop
// "CheckPay"
// "./index.rsh:54:11:dot"
// "[]"
load 254
dup
bz l2
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2:
pop
global Round
load 253
+
store 252
txn Sender
load 254
itob
concat
load 253
itob
concat
load 252
itob
concat
int 1
bzero
dig 1
substring 0 56
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0:
// Handler 1
dup
int 1
==
bz l3
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
<
assert
// "CheckPay"
// "./index.rsh:61:9:dot"
// "[]"
load 254
dup
bz l4
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4:
pop
load 255
load 254
itob
concat
load 253
itob
concat
txn Sender
concat
byte base64(AAAAAAAAAAE=)
global Round
itob
concat
load 254
dup
+
itob
concat
b loop3
l3:
// Handler 2
dup
int 2
==
bz l5
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 56
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 252
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:62:55:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:62:55:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l6:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l7:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5:
l8:
l9:
// Handler 5
dup
int 5
==
bz l10
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 249
pop
global Round
load 250
<
assert
// "CheckPay"
// "./index.rsh:74:15:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:74:15:dot"
// "[]"
load 255
txn Sender
==
assert
global Round
load 253
+
store 248
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 249
concat
load 248
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 128
app_global_put
pop
int 8
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l10:
// Handler 6
dup
int 6
==
bz l11
pop
// check step
int 6
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 96
btoi
store 250
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 250
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:75:59:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:75:59:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 252
txn Sender
==
assert
load 251
dup
bz l12
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l12:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l13:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l11:
// Handler 7
dup
int 7
==
bz l14
pop
// check step
int 8
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 120
store 250
dup
substring 120 128
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 248
pop
global Round
load 249
<
assert
// "CheckPay"
// "./index.rsh:83:13:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:83:13:dot"
// "[]"
load 252
txn Sender
==
assert
global Round
load 253
+
store 247
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
concat
load 250
concat
load 248
itob
concat
load 247
itob
concat
int 1
bzero
dig 1
substring 0 127
app_global_put
byte base64(AQ==)
dig 1
substring 127 136
app_global_put
pop
int 10
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l14:
// Handler 8
dup
int 8
==
bz l15
pop
// check step
int 8
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 120
store 250
dup
substring 120 128
btoi
store 249
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 249
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:84:59:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:84:59:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 251
dup
bz l16
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 255
dig 1
gtxns Receiver
==
assert
l16:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l17:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l15:
// Handler 9
dup
int 9
==
bz l18
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 120
store 250
dup
substring 120 128
btoi
store 249
dup
substring 128 136
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 16
==
assert
dup
substring 0 8
btoi
store 247
dup
substring 8 16
btoi
store 246
pop
global Round
load 248
<
assert
// "CheckPay"
// "./index.rsh:91:15:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:91:15:dot"
// "[]"
load 255
txn Sender
==
assert
// Nothing
// "reach standard library:62:17:application"
// "[at ./index.rsh:93:24:application call to \"checkCommitment\" (defined at: reach standard library:61:8:function exp)]"
load 250
load 246
itob
load 247
itob
concat
sha256
==
assert
load 255
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 247
int 4
load 249
-
+
int 3
%
itob
global Round
itob
concat
load 251
itob
concat
b loop3
l18:
// Handler 10
dup
int 10
==
bz l19
pop
// check step
int 10
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
byte base64(AQ==)
app_global_get
concat
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 48
btoi
store 253
dup
substring 48 80
store 252
dup
substring 80 88
btoi
store 251
dup
substring 88 120
store 250
dup
substring 120 128
btoi
store 249
dup
substring 128 136
btoi
store 248
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 248
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:92:59:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:92:59:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 252
txn Sender
==
assert
load 251
dup
bz l20
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 252
dig 1
gtxns Receiver
==
assert
l20:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l21:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l19:
int 0
assert
loop3:
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 24
btoi
store 253
pop
dup
substring 0 32
store 252
dup
substring 32 40
btoi
store 251
dup
substring 40 48
btoi
store 250
dup
substring 48 80
store 249
pop
load 255
int 1
==
bz l22
load 254
load 250
+
store 248
load 252
load 251
itob
concat
load 250
itob
concat
load 249
concat
load 253
itob
concat
load 248
itob
concat
int 1
bzero
dig 1
substring 0 96
app_global_put
pop
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l22:
load 252
load 251
itob
concat
load 249
concat
load 255
itob
concat
byte base64()
loop4:
pop
dup
substring 0 32
store 255
dup
substring 32 40
btoi
store 254
dup
substring 40 72
store 253
dup
substring 72 80
btoi
store 252
pop
int 2
load 254
*
dup
bz l23
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 253
load 255
load 252
int 2
==
select
dig 1
gtxns Receiver
==
assert
l23:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l24:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 136,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v268",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v269",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v268",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v269",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v311",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e9",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v311",
                "type": "uint256"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v323",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001b2738038062001b27833981016040819052620000269162000244565b6000808055604080516020810190915290815260408051835181526020808501518051828401520151918101919091527ff6f99043ebaefcd14be52433ca7dc9978aa637aef8ca1601e1816a0abc2f99299060600160405180910390a16020820151516200009890341460076200013d565b6020808301510151620000ac9043620002a4565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a09091019093528051919262000133926002929091019062000167565b5050505062000308565b81620001635760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017590620002cb565b90600052602060002090601f016020900481019282620001995760008555620001e4565b82601f10620001b457805160ff1916838001178555620001e4565b82800160010185558215620001e4579182015b82811115620001e4578251825591602001919060010190620001c7565b50620001f2929150620001f6565b5090565b5b80821115620001f25760008155600101620001f7565b604080519081016001600160401b03811182821017156200023e57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025857600080fd5b620002626200020d565b835181526040601f19830112156200027957600080fd5b620002836200020d565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002c657634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e057607f821691505b602082108114156200030257634e487b7160e01b600052602260045260246000fd5b50919050565b61180f80620003186000396000f3fe6080604052600436106100955760003560e01c806383230757116100595780638323075714610102578063ab53f2c614610125578063b1adad0e14610148578063f2c9f6961461015b578063fd948b861461016e57600080fd5b806309fa1e2f146100a1578063306ab814146100b65780634ce4f265146100c95780636d213eec146100dc5780637963168e146100ef57600080fd5b3661009c57005b600080fd5b6100b46100af3660046113d7565b610181565b005b6100b46100c4366004611401565b6103ab565b6100b46100d7366004611401565b610545565b6100b46100ea366004611401565b610684565b6100b46100fd366004611401565b610929565b34801561010e57600080fd5b506001546040519081526020015b60405180910390f35b34801561013157600080fd5b5061013a610ab9565b60405161011c929190611424565b6100b4610156366004611401565b610b56565b6100b4610169366004611401565b610ccf565b6100b461017c366004611401565b610f17565b610191600a600054146028611090565b6101ab813515806101a457506001548235145b6029611090565b6000808055600280546101bd90611481565b80601f01602080910402602001604051908101604052809291908181526020018280546101e990611481565b80156102365780601f1061020b57610100808354040283529160200191610236565b820191906000526020600020905b81548152906001019060200180831161021957829003601f168201915b505050505080602001905181019061024e91906114d2565b90506102618160e001514310602a611090565b604080518335815260208085013590820152838201358183015290517fe6fa34ba311ad7d222e1d3383764f18a0f4e0068349d17d04fc5d04212be1d7f9181900360600190a16102b334156025611090565b80516102cb906001600160a01b031633146026611090565b60408051610318916102f29190850135906020808701359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260a00151146027611090565b6103206112a8565b815181516001600160a01b0391821690526020808401518351909101526040808401518351909101526060808401518351921691015260c0820151600390610369906004611594565b6103779060208601356115ab565b61038191906115c3565b602080830180519290925281514391015260808301519051604001526103a6816110b9565b505050565b6103bb600a60005414602d611090565b6103d5813515806103ce57506001548235145b602e611090565b6000808055600280546103e790611481565b80601f016020809104026020016040519081016040528092919081815260200182805461041390611481565b80156104605780601f1061043557610100808354040283529160200191610460565b820191906000526020600020905b81548152906001019060200180831161044357829003601f168201915b505050505080602001905181019061047891906114d2565b905061048c8160e00151431015602f611090565b7fbc00bef455301cf914c30c8a9af2a81c4e58a53a327cc5726ef84b62ea9c1fc9826040516104bb91906115e5565b60405180910390a16104cf3415602b611090565b60608101516104ea906001600160a01b03163314602c611090565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561052b573d6000803e3d6000fd5b506000808055600181905561054290600290611301565b33ff5b6105556006600054146018611090565b61056f8135158061056857506001548235145b6019611090565b60008080556002805461058190611481565b80601f01602080910402602001604051908101604052809291908181526020018280546105ad90611481565b80156105fa5780601f106105cf576101008083540402835291602001916105fa565b820191906000526020600020905b8154815290600101906020018083116105dd57829003601f168201915b5050505050806020019051810190610612919061160f565b90506106268160a00151431015601a611090565b7f2de542e04768f7d432d52df08943d2fab028221c30dba664ab546be3aae5e4a08260405161065591906115e5565b60405180910390a161066934156016611090565b60608101516104ea906001600160a01b031633146017611090565b610694600860005414601d611090565b6106ae813515806106a757506001548235145b601e611090565b6000808055600280546106c090611481565b80601f01602080910402602001604051908101604052809291908181526020018280546106ec90611481565b80156107395780601f1061070e57610100808354040283529160200191610739565b820191906000526020600020905b81548152906001019060200180831161071c57829003601f168201915b505050505080602001905181019061075191906116a3565b90506107696040518060200160405280600081525090565b61077a8260c001514310601f611090565b6040805184358152602080860135908201527f5986e59bba8dd42f2aef79bbc49e99479d332aa932d6435e66d861d23c990e97910160405180910390a16107c33415601b611090565b60608201516107de906001600160a01b03163314601c611090565b60408201516107ed90436115ab565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e0840152600a6000554360015590516108fe9183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061092292919061133e565b5050505050565b6109396001600054146009611090565b6109538135158061094c57506001548235145b600a611090565b60008080556002805461096590611481565b80601f016020809104026020016040519081016040528092919081815260200182805461099190611481565b80156109de5780601f106109b3576101008083540402835291602001916109de565b820191906000526020600020905b8154815290600101906020018083116109c157829003601f168201915b50505050508060200190518101906109f69190611741565b9050610a0981606001514310600b611090565b7f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d82604051610a3891906115e5565b60405180910390a1610a51816020015134146008611090565b610a596112a8565b815181516001600160a01b039091169052602080830180518351830152604080850151845190910152825133606090910152818301805160019052514392019190915251610aa790806115ab565b6020820151604001526103a6816110b9565b600060606000546002808054610ace90611481565b80601f0160208091040260200160405190810160405280929190818152602001828054610afa90611481565b8015610b475780601f10610b1c57610100808354040283529160200191610b47565b820191906000526020600020905b815481529060010190602001808311610b2a57829003601f168201915b50505050509050915091509091565b610b666008600054146022611090565b610b8081351580610b7957506001548235145b6023611090565b600080805560028054610b9290611481565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbe90611481565b8015610c0b5780601f10610be057610100808354040283529160200191610c0b565b820191906000526020600020905b815481529060010190602001808311610bee57829003601f168201915b5050505050806020019051810190610c2391906116a3565b9050610c378160c001514310156024611090565b7f958f78ebab349905eb0abbf2926ea4aab4a0f19ea393268c746af21c24b4022282604051610c6691906115e5565b60405180910390a1610c7a34156020611090565b8051610c92906001600160a01b031633146021611090565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561052b573d6000803e3d6000fd5b610cdf6006600054146013611090565b610cf981351580610cf257506001548235145b6014611090565b600080805560028054610d0b90611481565b80601f0160208091040260200160405190810160405280929190818152602001828054610d3790611481565b8015610d845780601f10610d5957610100808354040283529160200191610d84565b820191906000526020600020905b815481529060010190602001808311610d6757829003601f168201915b5050505050806020019051810190610d9c919061160f565b9050610db46040518060200160405280600081525090565b610dc58260a0015143106015611090565b6040805184358152602080860135908201527f3c04125933303f599cc5d20b6f660c4c9857a80c5f4570c2236678d0bd3959e3910160405180910390a1610e0e34156011611090565b8151610e26906001600160a01b031633146012611090565b6040820151610e3590436115ab565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260086000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100016108fe565b610f27600160005414600e611090565b610f4181351580610f3a57506001548235145b600f611090565b600080805560028054610f5390611481565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7f90611481565b8015610fcc5780601f10610fa157610100808354040283529160200191610fcc565b820191906000526020600020905b815481529060010190602001808311610faf57829003601f168201915b5050505050806020019051810190610fe49190611741565b9050610ff881606001514310156010611090565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d158260405161102791906115e5565b60405180910390a161103b3415600c611090565b8051611053906001600160a01b03163314600d611090565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561052b573d6000803e3d6000fd5b816110b55760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516020810190915260008152602082015151600114156111e15781516040015160208084015101516110ee91906115ab565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526006600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e001604051602081830303815290604052600290805190602001906111db92919061133e565b50505050565b6040805160c081018252600091810182815260608083018481526080840185815260a085018681528486526020808701979097528851516001600160a01b0390811690955288518701519092528751909201519092169052918401515191829052906103a690829060021461125b5780516040015161125f565b8051515b6001600160a01b03166108fc826000015160200151600261128091906117ba565b6040518115909202916000818181858888f1935050505015801561052b573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016112fc60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461130d90611481565b6000825580601f1061131d575050565b601f01602090049060005260206000209081019061133b91906113c2565b50565b82805461134a90611481565b90600052602060002090601f01602090048101928261136c57600085556113b2565b82601f1061138557805160ff19168380011785556113b2565b828001600101855582156113b2579182015b828111156113b2578251825591602001919060010190611397565b506113be9291506113c2565b5090565b5b808211156113be57600081556001016113c3565b6000606082840312156113e957600080fd5b50919050565b6000604082840312156113e957600080fd5b60006040828403121561141357600080fd5b61141d83836113ef565b9392505050565b82815260006020604081840152835180604085015260005b818110156114585785810183015185820160600152820161143c565b8181111561146a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061149557607f821691505b602082108114156113e957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146114cd57600080fd5b919050565b60006101008083850312156114e657600080fd5b6040519081019067ffffffffffffffff8211818310171561151757634e487b7160e01b600052604160045260246000fd5b81604052611524846114b6565b81526020840151602082015260408401516040820152611546606085016114b6565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b634e487b7160e01b600052601160045260246000fd5b6000828210156115a6576115a661157e565b500390565b600082198211156115be576115be61157e565b500190565b6000826115e057634e487b7160e01b600052601260045260246000fd5b500690565b8135815260408101602083013580151580821461160157600080fd5b806020850152505092915050565b600060c0828403121561162157600080fd5b60405160c0810181811067ffffffffffffffff8211171561165257634e487b7160e01b600052604160045260246000fd5b60405261165e836114b6565b81526020830151602082015260408301516040820152611680606084016114b6565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e082840312156116b557600080fd5b60405160e0810181811067ffffffffffffffff821117156116e657634e487b7160e01b600052604160045260246000fd5b6040526116f2836114b6565b81526020830151602082015260408301516040820152611714606084016114b6565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60006080828403121561175357600080fd5b6040516080810181811067ffffffffffffffff8211171561178457634e487b7160e01b600052604160045260246000fd5b604052611790836114b6565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b60008160001904831182151516156117d4576117d461157e565b50029056fea2646970667358221220a00954b701b11f86b5afc5402926d05979db64cdeaf1a01f25d46b113adc108d64736f6c63430008090033`,
  BytecodeLen: 6951,
  Which: `oD`,
  version: 4,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
