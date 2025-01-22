export const fetchQuiz = async (cat: string, diff: string, noq: string) => {
  let url = `https://opentdb.com/api.php?amount=${noq}`;
  if (cat) url += `&category=${cat}`;
  if (diff) url += `&cdifficulty=${diff}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`There was an error fetching the data: ${error}`);
  } finally {
    console.log(`Fetch completed`);
  }
};
