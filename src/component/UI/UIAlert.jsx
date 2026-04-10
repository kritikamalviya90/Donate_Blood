export default function UIAlert({ variant = "default", children }) {
    return <div className={`ui-alert ui-alert-${variant}`}>{children}</div>;
}
