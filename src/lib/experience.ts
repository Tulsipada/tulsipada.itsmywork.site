// Utility function to calculate years of experience dynamically
export function calculateExperience(careerStartDate: string): string {
  const startDate = new Date(careerStartDate);
  const currentDate = new Date();
  
  // Calculate the difference in years
  let years = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  
  // Adjust if we haven't reached the anniversary month yet
  if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < startDate.getDate())) {
    years--;
  }
  
  // Ensure minimum of 1 year
  const experienceYears = Math.max(years, 1);
  
  return `${experienceYears}+`;
}

// Function to replace placeholders in text with dynamic values
export function processDynamicText(text: string, replacements: Record<string, string>): string {
  let processedText = text;
  
  Object.entries(replacements).forEach(([key, value]) => {
    const placeholder = `{{${key}}}`;
    processedText = processedText.replace(new RegExp(placeholder, 'g'), value);
  });
  
  return processedText;
}
