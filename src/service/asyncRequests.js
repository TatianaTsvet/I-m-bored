const waitingTime = 1000;

export default class AsyncRequest {
  constructor() {
    this._apiBase = "https://www.boredapi.com/api/activity";
  }

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`, {
      cache: "no-cache",
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  async getActivity(type) {
    const startTime = new Date().getTime();
    let newData = "";

    let data = new URLSearchParams();
    if (type === "random") {
      data = "";
    } else {
      data = `type=${type}`;
    }

    newData = await this.getResource(`?${data}`);

    const endTime = new Date().getTime();
    const leftTime = waitingTime - (endTime - startTime);
    await new Promise((resolve) => setTimeout(resolve, leftTime));
    return newData;
  }
}

// export const fetchNewActivity = (type) => {
//   let data = new URLSearchParams();
//   if (type === "") {
//     data = "";
//   } else {
//     data = `type=${type}`;
//   }
//   return (dispatch) => {
//     // dispatch(fetchActivity());
//     fetch(`https://www.boredapi.com/api/activity?${data}`, {
//       cache: "no-cache",
//     })
//       .then((res) => res.json())
//       .then((data) => dispatch(fetchActivity(data)));
//   };
// };
