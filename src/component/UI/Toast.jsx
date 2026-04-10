import { useEffect } from "react";

export default function Toast({ message, show, onClose, duration = 3500 }) {
    useEffect(() => {
        if (!show) return;
        const timer = setTimeout(() => {
            onClose?.();
        }, duration);
        return () => clearTimeout(timer);
    }, [show, duration, onClose]);

    if (!show) return null;

    return (
        <div className="ui-toast">
            <div className="ui-toast-icon">❤️</div>
            <div className="ui-toast-body">{message}</div>
            <button className="ui-toast-close" onClick={onClose} type="button">
                ×
            </button>
        </div>
    );
}
