import {
  IActivity,
  IResponse,
  IResponseMessage,
} from "../interfaces/interfaces";
const waitingTime = 2000;

export const fetchNewActivity = async (type: string): Promise<any> => {
  const startTime = new Date().getTime();

  let data = "";
  if (type === "random") {
    data = "";
  } else {
    data = `type=${type}`;
  }

  const res = await fetch(`https://www.boredapi.com/api/activity?${data}`, {
    cache: "no-cache",
  });
  const endTime = new Date().getTime();
  const leftTime = waitingTime - (endTime - startTime);
  await new Promise((resolve) => setTimeout(resolve, leftTime));
  return res;
};

export const sendActivityWithSuggestion = async (
  suggestion: IResponse
): Promise<any> => {
  const startTime = new Date().getTime();

  const res = await fetch(`https://www.boredapi.com/api/suggestion`, {
    cache: "no-cache",
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(suggestion),
  });
  const endTime = new Date().getTime();
  const leftTime = waitingTime - (endTime - startTime);
  await new Promise((resolve) => setTimeout(resolve, leftTime));
  return res;
};
