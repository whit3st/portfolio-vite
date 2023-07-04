import PropTypes from 'prop-types';
export default function FooterLink({href, src}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            
        >
            <img src={src} alt={src + ' logo'} />
        </a>
    );
}

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
}