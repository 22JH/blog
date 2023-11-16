export default function SignUp() {
  return (
    <>
      <form method="POST" action="/api/auth/signup">
        <input name="id" type="text" placeholder="이름" />
        <input name="password" type="password" placeholder="비번" />
        <input name="email" type="email" placeholder="이메일" />
        <input name="role" type="text" placeholder="role" />
        <button type="submit">id/pw 가입요청</button>
      </form>
    </>
  );
}
