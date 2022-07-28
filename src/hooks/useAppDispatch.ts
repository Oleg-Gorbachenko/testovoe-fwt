import { useDispatch } from 'react-redux';

import { AppDispatchType } from 'store/paintings/types';

export const useAppDispatch = (): AppDispatchType => useDispatch<AppDispatchType>();
