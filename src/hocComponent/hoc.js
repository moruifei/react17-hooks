import React, { useState } from 'react';

export default function HocComponent(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: ''
            }
        }
        proc(wrappedComponentInstance){
            console.log(wrappedComponentInstance, 'wrapped 实例')
            wrappedComponentInstance.funReact()
        }
        componentDidMount() {

        }
        handleChange = (e) => {
            this.setState({
                name: e.target.value
            },()=>{
                console.log(this.state.name)
            })
        }
        render() {
            const newProps = {
                inputProps: {
                    value: this.state.name,
                    onChange: this.handleChange
                }
            }
            // const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
            const props = Object.assign({}, this.props)
            return <WrappedComponent {...props} {...newProps} />
        }
    }
}