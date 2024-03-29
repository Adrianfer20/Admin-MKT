import toast from 'react-hot-toast';

export function useToast() {
    const notify = (msg) => toast(msg);
    return {toast, notify}
}