import PropTypes from 'prop-types';
export default function FooterLink({href, src}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            
        >
            <img src={src} alt={src + ' logo'} loading='lazy'/>
        </a>
    );
}

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}