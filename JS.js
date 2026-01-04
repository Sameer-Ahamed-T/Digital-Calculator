let t="";
function update(val)
{
  t+=val;
  document.getElementById("input").value=t;
}
function evaluateMath(expr) {
  return Function("return " + expr)();
}
function Equals()
{
  document.getElementById("input").value=evaluateMath(t);
  t = "";
}
