/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n}); //fixme
  var answer = null;
  var loop = function(rows) {
    if (rows === n) {
      answer = solution.rows().map(function(row) {
        return row.slice();
      });
      return;
    }
    for (let column = 0; column < n; column++) {
      solution.togglePiece(rows, column);
      if (!solution.hasAnyRooksConflicts()) {
        loop(rows + 1);
      }
      solution.togglePiece(rows, column);
    }
  };
  loop(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(answer));
  return answer;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // actual solution without factorial
  // var solutionCount = 0; //fixme
  // var board = new Board({n});
  // var loop = function(rows) {
  //   if (rows === n) {
  //     solutionCount++;
  //     return;
  //   }
  //   for (let column = 0; column < n; column++) {
  //     board.togglePiece(rows, column);
  //     if (!board.hasAnyRooksConflicts()) {
  //       loop(rows + 1);
  //     }
  //     board.togglePiece(rows, column);
  //   }
  // };
  // loop(0);
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;
  var factorial = function(number) {
    if (number === 0) {
      return 1;
    }
    return number *= factorial(number - 1);
  };
  var solutionCount = factorial(n); //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution = new Board({n});
  if (n === 2 || n === 3) {
    return solution.rows();
  }
  var answer = null;

  var loop = function(rows) {
    if (rows === n) {
      answer = solution.rows().map(function(row) {
        return row.slice();
      });
      return;
    }
    for (let column = 0; column < n; column++) {
      solution.togglePiece(rows, column);
      if (!solution.hasAnyQueensConflicts()) {
        loop(rows + 1);
      }
      solution.togglePiece(rows, column);
    }
  };
  loop(0);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(answer));
  return answer;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other

window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n});

  var loop = function(rows) {

    if (rows === n) {
      solutionCount++;
      return;
    }

    for (let column = 0; column < n; column++) {
      board.togglePiece(rows, column);
      if (!board.hasAnyQueensConflicts()) {
        loop(rows + 1);
      }
      board.togglePiece(rows, column);
    }
  };
  loop(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};