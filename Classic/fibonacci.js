// 斐波那契

// 1、暴力递归
function fibonacci1(n) {
  if (n === 1 || n === 2) return 1
  return fibonacci1(n - 1) + fibonacci1(n-2)
}

// 2、动态规划
// 动态规划 a
function fibonacci2a(n) {
  if (!n) return 0
  if (n === 1 || n=== 2) return 1
  let res = []
  for (let i = 0; i <= n; ++i) {
    res[i] = 0
  }
  res[1] = 1
  res[2] = 1
  for (let i = 3; i <= n; ++i) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res[n]
}

// 动态规划 b
function fibonacci2b(n) {
  let cache = [0, 1]
  for (let i = 2; i<= n; i++) {
    cache[i] = cache[i - 1] + cache[i - 2]
  }
  return cache[N]
}

// 3、矩阵求幂
function fibonacci3(n) {
  if (n <= 1) return n
  const Q = [[1, 1], [1, 0]];
  const powQ = matrixPower(Q, n - 1);

  // 计算给定矩阵的幂
  function matrixPower(mat, exp) {
    let ret = [[1, 0], [0, 1]];
    let tmp = mat;
    while (exp > 0) {
      if ((exp & 1) === 1) {
        ret = mul2x2(ret, tmp);
      }
      tmp = mul2x2(tmp, tmp);
      exp >>= 1;
    }
    return ret;
  }


  function mul2x2(A, B) {
    const C = [[0, 0], [0, 0]]

    C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0]
    C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1]
    C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0]
    C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1]

    return C
  }
  return powQ[0][0]
}