export const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    
    if (!token) {
      return res.status(403).json({ error: 'No token provided' });
    }
  
    // Dummy token validation (replace with real validation)
    if (token !== 'mysecrettoken') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    next();
  };
  