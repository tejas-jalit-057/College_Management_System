const roleMiddleware = (allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.user.role_id)) {
            return res.status(403).json({ message: 'Access denied' });
        }

        return next();
    };
};

export default roleMiddleware;
