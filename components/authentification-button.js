import { useUser } from '@auth0/nextjs-auth0';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
const AuthenticationButton = () => {
    const { user } = useUser();
    return user ? <Button flat color="warning" auto><Link href="/api/auth/logout"><a style={{ textDecoration: 'none', color: 'inherit' }}>Sign out</a></Link></Button> : <Button flat color="warning" auto><Link href="/api/auth/login"><a style={{ textDecoration: 'none', color: 'inherit' }}>Log in</a></Link></Button>;
};
export default AuthenticationButton;