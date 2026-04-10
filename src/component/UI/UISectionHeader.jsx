export default function UISectionHeader({ title, subtitle, action }) {
    return (
        <div className="ui-section-header">
            <div>
                <h5 className="ui-text-white mb-1">{title}</h5>
                {subtitle && <p className="ui-text-muted mb-0 small">{subtitle}</p>}
            </div>
            {action && <div className="ui-section-action">{action}</div>}
        </div>
    );
}
