export function Property({ name, price, rating }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>${price} a night</p>
      <p>{rating}⭐</p>
    </div>
  );
}
