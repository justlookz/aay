type ElOpt = {
    href?: string,
    target?: string,
    class?: string,
    src?: string
}

const el = (tag: string,
    opt: ElOpt,
    html?: string | string[],
    attr?: string): string => {
    attr ?? (attr = ``);
    html ?? (html = ``);
    if (!(typeof html === "string")) {
        let tmp = "";
        html.forEach(el => tmp += el);
        html = tmp;
    }
    if (opt) {
        opt.href && (attr += ` href="${opt.href}"`);
        opt.target && (attr += ` target="${opt.target}"`);
        opt.class && (attr += ` class="${opt.class}"`);
        opt.src && (attr += ` src="${opt.src}"`);
    }
    return `<${tag} ${attr}>${html}</${tag}>`
}

export { el };
