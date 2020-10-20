import React from 'react';

const InputToHoc = (Component) => {
    class LogInput extends React.Component {
        componentDidUpdate(prevProps) {
            console.log(prevProps, 'pre')
            console.log(this.props, 'this')
        }
        render() {
            const { forwardedRef, ...rest } = this.props;
            return <Component {...rest} ref={forwardedRef} />
        }
    }
    return React.forwardRef((props, ref) => {
        return <LogInput {...props} forwardedRef={ref} />
    });
}
export default InputToHoc;