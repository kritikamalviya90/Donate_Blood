export default function UIStat({ label, value }) {
    return (
        <div className="ui-stat">
            <span className="ui-stat-label">{label}</span>
            <h3 className="ui-stat-value">{value}</h3>
        </div>
    );
}
