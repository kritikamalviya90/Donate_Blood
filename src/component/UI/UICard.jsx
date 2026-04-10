import { Card } from "react-bootstrap";

export default function UICard({ children, className = "", ...props }) {
    return (
        <Card className={`glass ui-card hospital-card ${className}`} {...props}>
            {children}
        </Card>
    );
}
