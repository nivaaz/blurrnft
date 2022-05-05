import styled from "@emotion/styled";

export const colorOptions = {
    purple: '#E6D9F6',
    pink: '#FBE3F2',
    blue: '#8BE3EE'
}

const ArcComponent = styled.div((props) => ({
    position: 'absolute',
    borderRadius: getBorderRadius(props.kind),
    backgroundColor: props.color,
    width: getSize(props.size),
    height: getSize(props.size),
    ...(props.applyShadow && {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), \
        inset -4px -8px 16px rgba(110, 86, 139, 0.25), \
        inset 8px 4px 16px rgba(255, 255, 255, 0.7)"
    })

}))


const getSize = (size) => {
    switch (size) {
        case 'sm':
            return '103px';
        case 'md':
            return '250px';
        case 'lg':
            return '720px';
        default:
            return '100px';
    }
}

const getBorderRadius = (kind) => {
    switch (kind) {
        case 'top-left':
            return '100% 0 0 0';
        case 'top-right':
            return '0 100% 0 0';
        case 'bottom-left':
            return '0 0 100% 0';
        case 'bottom-right':
            return '0 0 0 100%';
        default:
            return '100% 0 0 0';
    }
}

export const Arc = (props) => {
    return (<ArcComponent {...props} />)
}

export default Arc; 