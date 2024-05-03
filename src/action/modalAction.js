import { OPEN_MODAL } from '../type/modalTypes';

export const openModal = (openClose, content) => {
    return {
        type: OPEN_MODAL, // Use the constant from modalTypes
        payload: {
            openClose,
            content,
        }
    }
}
