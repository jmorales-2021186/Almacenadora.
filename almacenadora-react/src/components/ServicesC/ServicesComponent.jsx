export const ServicesComponent = ({
  name,
  description,

  price,
}) => {
  return (
    <>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
    </>
  );
};
