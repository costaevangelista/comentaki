const Time = ({ timestamp }) => {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  return `${date.toLocaleDateString("pt-BR")} às ${hours}:${minutes.substr(
    -2
  )}:${seconds.substr(-2)}`;
};

export default Time;
