import './Card.css'

const Card = props => {
  const TagName = props.tagName || 'div';

  return (
    <TagName className={'card ' + props.className}>
      {props.children}
    </TagName>
  );
}

export default Card;