import "./PropertyListStyles.css";
import Property from "./Property";

export default function PropertyList({ properties }) {
  return (
    <div>
      <ul className="PropertyList">
        {properties.map((property) => (
          <li key={property.id}>
            <Property {...property} />
          </li>
        ))}
      </ul>
    </div>
  );
}
