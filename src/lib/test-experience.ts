// Test the experience calculation
import { calculateExperience } from './experience';

// Test with different dates
console.log('Testing experience calculation:');
console.log('Career start: 2022-06-01');
console.log('Current experience:', calculateExperience('2022-06-01'));

// Test with a future date to see how it handles edge cases
console.log('Career start: 2020-01-01');
console.log('Current experience:', calculateExperience('2020-01-01'));

// Test with recent start
console.log('Career start: 2024-01-01');
console.log('Current experience:', calculateExperience('2024-01-01'));
