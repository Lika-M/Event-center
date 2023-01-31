export const useIdentify = (userId, ownerId) => {
    const hasUser = Boolean(userId);
    const isOwner = Boolean(userId === ownerId);

    return {hasUser, isOwner}
}