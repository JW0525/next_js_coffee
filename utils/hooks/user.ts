import useSWR from 'swr';
import fetcher from '../../pages/lib/fetch'

export function useCurrentUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data?.user;
  return [user, { mutate }];
}
