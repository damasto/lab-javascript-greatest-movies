// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => {
        return movie.director
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce((acc, movie) => {
        if (movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")) {
            return acc + 1;
        } else {
            return acc;
        };
    }, 0);    
};


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    };

    const sumScores = moviesArray.reduce((acc, movie) => {
        return typeof movie.score === "number" ? acc + movie.score : acc;
    }, 0);
    
    const average = sumScores / moviesArray.length;

    return parseFloat(average.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let moviesFound = 0;
    

    const dramaSum = moviesArray.reduce((acc, movie) => {
        if(movie.genre.includes("Drama")) {
            moviesFound++;
            return acc + movie.score 
        } else {
            return acc
        };
    }, 0);

    if (dramaSum === 0) {
        return 0
    }

    const average = dramaSum / moviesFound;

    return parseFloat(average.toFixed(2));
};
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return  [...moviesArray].sort((a, b) =>  {
        return a.year > b.year ? 1
        : a.year < b.year ? -1
        : a.year === b.year ? a.title.localeCompare(b.title)
        : 0;
    });
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const sortedMovies = moviesArray.sort((a, b) => a.title.localeCompare(b.title) )
    console.log(sortedMovies);

    const titleArray = sortedMovies.map((movie) => {
        return movie.title;
    });

    if (titleArray.length < 20) {
        return titleArray;
    } else {
        const firstTwenty = [];

        for (let i = 0; i < 20; i++) {
          firstTwenty.push(titleArray[i]);
        }

        return firstTwenty;
    }
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   return moviesArray.map((movie) => {
        const duration = movie.duration;
        let hours = 0;
        let mins = 0;

        if (duration.includes("h")) {
            hours = parseInt(duration.split("h")[0], 10);
        }
        
        if (duration.includes("m")) {
            mins = parseInt(duration.split("m")[0].split("h")[1] || duration.split("m")[0], 10)
        }

        const totalTime = hours * 60  + mins

        return {
            ...movie,
            duration: totalTime
        }
   })}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let sumScores = [];
    
    if (moviesArray.length === 0) {
        return null
    };

    for (let i = 0; i < moviesArray.length; i++) {
        let movieYear = moviesArray[i].year;
        let movieScore = moviesArray[i].score;
              sumMovieScores = {
              year: movieYear,
              score: movieScore,
              count: 1,
            };

        
        
        if (sumScores.filter((item) => item.year === movieYear).length === 0) {
            sumScores.push(sumMovieScores)
        } else {
            sumScores.forEach((item => {
                if (item.year === movieYear) {
                    item.score = item.score + movieScore;
                    item.count++}
            }))
        }
    };

    sumScores.forEach((item) => {
        item.avgScore = item.score / item.count
    })

    
    const sortScores = sumScores.sort((a, b) => {
        if (a.avgScore > b.avgScore) {
            return -1
        } else if (a.avgScore < b.avgScore) {
            return 1
        } else {
            return 0
        }
    });

    const highestScore = sortScores.filter((item) => {
        return item.avgScore === sortScores[0].avgScore
    }).sort((a, b) => {
        if (a.year > b.year) {
          return 1;
        } else if (a.year < b.year) {
          return -1;
        } else {
          return 0;
        }
    });


    return `The best year was ${highestScore[0].year} with an average score of ${highestScore[0].avgScore}`;
 };
