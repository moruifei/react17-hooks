
function render(vnode, container) {
    console.log(vnode, 'vnode')
    // step1 将虚拟dom转换为真实的dom
    const node = createNode(vnode);
    //step2 将真实dom插入容器中
    container.appendChild(node);
}

function createNode(vnode) { // 生成dom
    const { type, props } = vnode;
    console.log(type, 'type')
    let node = null;
    if (typeof type === 'string') {
        node = updateHostComponent(type, props);
    } else if (isStringOrNumber(vnode)) {
        node = document.createTextNode(vnode);
    } else if (typeof type === 'function') {
        node = updateFunctionComponent(type, props);
    }
    return node;
}

function updateHostComponent(type, props) { // 渲染原生标签
    let node = document.createElement(type);
    updateAttributes(node, props);
    renderChildren(node, props.children);
    return node;
}
function updateAttributes(node, props) { // 将组件属性添加到组件上
    Object.keys(props).filter(e => e !== 'children').forEach(e => {
        node[e] = props[e];
    })
}

function renderChildren(parentNode, initChildren) { // 渲染子节点
    let children = Array.isArray(initChildren) ? initChildren : [initChildren];
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        render(child, parentNode);
    }
}
function updateFunctionComponent(type, props) {
    let vnode = type(props);
    let node = createNode(vnode);
    return node;
}
function updateClassComponent(type, props) {
    let instance = new type(props);
    let vnode = instance.render();
    let node = createNode(vnode);
    return node;
}
function isStringOrNumber(vnode) { // 判断文本节点的情况
    return typeof vnode === "string" || typeof vnode === "number";
}
export default { render }