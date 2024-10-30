import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const router = useRouter();

  const goToExamplePage = () => {
    router.push('/example');
  }

  // Prefetching 방법
  useEffect(() => {
    router.prefetch('/example');
  }, [router]);

  return (
    <div>
      <button onClick={goToExamplePage}>샘플</button>
    </div>
  );
}
