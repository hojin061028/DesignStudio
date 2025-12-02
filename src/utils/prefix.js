const isProd = process.env.NODE_ENV === 'production';

export function prefixPath(path) {
    if (isProd) {
        return `/DesignStudio${path}`;
    }
    return path;
}
