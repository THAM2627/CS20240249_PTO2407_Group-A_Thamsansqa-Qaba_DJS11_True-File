/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters

const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Parameters converted

const vel_milesps = vel * 0.277778; // converts km/h to m/s
const time_hour = time / 3600; // converts seconds to hours


// Calculations for velocity, distance, and remaining fuel
const d2 = (vel / time_hour) //calcultes new distance
const rf = fuel - fbr * time //calculates remaining fuel
const vel2 = calcNewVel(acc, vel, time) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(vel, acc, time) {
  if (vel === undefined || acc === undefined || time === undefined) {
    throw new Error('Missing required parameters');
  }
  if (acc < 0 || vel < 0 || time < 0) {
    throw new Error('Parameters cannot be negative'); x
  } else {
    const newVel2 = vel + (acc * time);
    const newVel_kmh = newVel2 / 0.277778;
    return newVel_kmh
  }
}
console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






