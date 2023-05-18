
(async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.prompt = i.contentWindow.prompt.bind(window);
    i.remove();
    Object.values(document.querySelector('body > div > div > div'))[1].children[0]._owner.stateNode.setState({ coins: Number(parseInt(prompt("How many tokens would you like?"))) })
})();
