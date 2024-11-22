import moment from 'moment-timezone';

export const currentTimestamp = () => {
  return moment().tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss');
};
