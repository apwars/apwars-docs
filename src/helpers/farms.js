import farms from 'config/farms';

export const useFarmFromPid = pid => {
  const farm = farms.find(farm => farm.pid === pid);

  return farm;
};
