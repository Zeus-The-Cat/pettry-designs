export const uuids = {
    admin: () => `a-${crypto.randomUUID()}`,
    user: () => `u-${crypto.randomUUID()}`,
    ticket: () => `t-${crypto.randomUUID()}`,
    message: () => `m-${crypto.randomUUID()}`,
}