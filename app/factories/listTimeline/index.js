import timelineList from './../timelineList';

const listTimeline = (total = 10) => {
  let list = [];
  for (let i = 0; i < total; i += 1) {
    list.push(timelineList());
  }
  return list;
};
export default listTimeline;
