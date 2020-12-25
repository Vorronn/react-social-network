export const actionFollowUnfollow = (items, userId, objPropName, newObjProp) => {
    return items.map(u => {
        if (u[objPropName] === userId) {
            return {...u, ...newObjProp};
        } else {
            return u;
        }
    })
}