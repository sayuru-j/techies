import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const secret_key = process.env.JWT_SECRET;

const DEFAULT_SIGN_OPTION: SignOption = {
  expiresIn: "1h",
};

export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTION
) {
  const token = jwt.sign(payload, secret_key!, options);
  return token;
}

export function verifyJwtAccessToken(token: string) {
  try {
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    console.error(error);
    return null;
  }
}
