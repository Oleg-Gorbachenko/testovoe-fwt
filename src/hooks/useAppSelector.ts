import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppStateType } from 'store/paintings/types';

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
