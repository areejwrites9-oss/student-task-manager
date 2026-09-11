import React from "react";

function App() {
  // =====================================================
  // 1. VARIABLES
  // =====================================================

  // var: can be reassigned and redeclared
  var userName = "John Doe";
  userName = "Ayesha";
  var userName = "Areej Fatima";

  var Age = 20;
  console.log("var:", userName);
  console.log("var:", Age);

  // let: can be reassigned but not redeclared in the same scope
  let age = 20;
  age = 21;
  console.log("let:", age);

  // const: cannot be reassigned or redeclared
  const country = "Pakistan";
  console.log("const:", country);

  // =====================================================
  // 2. DATA TYPES
  // =====================================================
  const name = "Areej Fatima"; // String
  const studentAge = 20; // Number
  const isStudent = true; // Boolean
  const emptyValue = null; // Null
  let notAssigned; // Undefined

  console.log("Name:", name);
  console.log("Age:", studentAge);
  console.log("Student:", isStudent);
  console.log("Empty:", emptyValue);
  console.log("Undefined:", notAssigned);
  console.log(typeof name);
  console.log(typeof studentAge);
  console.log(typeof isStudent);

  // =====================================================
  // 3. ARITHMETIC OPERATORS
  // =====================================================
  const num1 = 56;
  const num2 = 5;

  const addition = num1 + num2;
  const subtraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;
  const remainder = num1 % num2;
  const power = num1 ** 2;

  console.log("Addition:", addition);
  console.log("Subtraction:", subtraction);
  console.log("Multiplication:", multiplication);
  console.log("Division:", division);
  console.log("Remainder:", remainder);
  console.log("Power:", power);

  /*
    + Addition
    - Subtraction
    * Multiplication
    / Division
    % Remainder
    ** Power
  */

  // =====================================================
  // 4. ASSIGNMENT OPERATORS
  // =====================================================
  let score = 10;

  score += 5;
  console.log("score += 5:", score);

  score -= 2;
  console.log("score -= 2:", score);

  score *= 2;
  console.log("score *= 2:", score);

  score /= 2;
  console.log("score /= 2:", score);

  /*
    score += 5
    means:
    score = score + 5
  */

  // =====================================================
  // 5. COMPARISON OPERATORS
  // =====================================================
  const marks = 75;

  console.log("Greater:", marks > 50);
  console.log("Less:", marks < 50);
  console.log("Greater/equal:", marks >= 75);
  console.log("Less/equal:", marks <= 75);
  console.log("Equal:", marks === 75);
  console.log("Not equal:", marks !== 75);

  /*
    > Greater than
    < Less than
    >= Greater than or equal
    <= Less than or equal
    === Strict equality
    !== Strict inequality
  */

  // =====================================================
  // 6. == VS ===
  // =====================================================
  console.log(5 == "5"); // true
  console.log(5 === "5"); // false

  /*
    == checks value after type conversion
    === checks value AND type
    Prefer === in modern JavaScript.
  */

  // =====================================================
  // 7. LOGICAL OPERATORS
  // =====================================================
  const myAge = 21;
  const hasID = true;

  // AND
  console.log("AND:", myAge >= 18 && hasID);

  // OR
  const isAdmin = false;
  const isTeacher = true;
  console.log("OR:", isAdmin || isTeacher);

  // NOT
  const loggedIn = true;
  console.log("NOT:", !loggedIn);

  /*
    && AND
    || OR
    ! NOT
  */

  // =====================================================
  // 8. INCREMENT / DECREMENT
  // =====================================================
  let counter = 1;

  counter++;
  console.log("Increment:", counter);

  counter++;
  console.log("Increment:", counter);

  counter--;
  console.log("Decrement:", counter);

  /*
    counter++
    means:
    counter = counter + 1
  */

  // =====================================================
  // Small helper component for a labeled value "card"
  // =====================================================
  const StatCard = ({ label, value, color = "indigo" }) => {
    const colorMap = {
      indigo: "bg-indigo-50 text-indigo-700 border-indigo-200",
      emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
      amber: "bg-amber-50 text-amber-700 border-amber-200",
      rose: "bg-rose-50 text-rose-700 border-rose-200",
    };

    return (
      <div
        className={`flex flex-col justify-center rounded-xl border p-4 shadow-sm transition hover:shadow-md ${colorMap[color]}`}
      >
        <span className="text-xs font-medium uppercase tracking-wide opacity-70">
          {label}
        </span>
        <span className="mt-1 text-lg font-semibold">{String(value)}</span>
      </div>
    );
  };

  // =====================================================
  // RETURN JSX
  // =====================================================
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            JavaScript + React Basics
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Variables, data types, operators — with live output below.
          </p>
        </header>

        {/* Variables & Data Types */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Variables &amp; Data Types
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <StatCard label="Name" value={name} color="indigo" />
            <StatCard label="Age" value={studentAge} color="indigo" />
            <StatCard label="Is Student" value={String(isStudent)} color="indigo" />
            <StatCard label="Country (const)" value={country} color="indigo" />
            <StatCard label="var userName" value={userName} color="indigo" />
            <StatCard label="let age" value={age} color="indigo" />
          </div>
        </section>

        {/* Arithmetic Operators */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Arithmetic Operators
          </h2>
          <p className="mb-4 text-sm text-slate-500">
            num1 = {num1}, num2 = {num2}
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <StatCard label="Addition" value={addition} color="emerald" />
            <StatCard label="Subtraction" value={subtraction} color="emerald" />
            <StatCard label="Multiplication" value={multiplication} color="emerald" />
            <StatCard label="Division" value={division} color="emerald" />
            <StatCard label="Remainder" value={remainder} color="emerald" />
            <StatCard label="Power" value={power} color="emerald" />
          </div>
        </section>

        {/* Assignment Operators */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Assignment Operators
          </h2>
          <p className="text-sm text-slate-600">
            Starting score: <span className="font-semibold">10</span> → after
            +5, -2, *2, /2 ={" "}
            <span className="font-semibold text-amber-600">{score}</span>
          </p>
        </section>

        {/* Comparison Operators */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Comparison Operators (marks = {marks})
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <StatCard label="> 50" value={marks > 50} color="amber" />
            <StatCard label="< 50" value={marks < 50} color="amber" />
            <StatCard label=">= 75" value={marks >= 75} color="amber" />
            <StatCard label="<= 75" value={marks <= 75} color="amber" />
            <StatCard label="=== 75" value={marks === 75} color="amber" />
            <StatCard label="!== 75" value={marks !== 75} color="amber" />
          </div>
        </section>

        {/* == vs === */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            == vs ===
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label='5 == "5"' value={5 == "5"} color="rose" />
            <StatCard label='5 === "5"' value={5 === "5"} color="rose" />
          </div>
        </section>

        {/* Logical Operators */}
        <section className="mb-8 rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Logical Operators
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <StatCard label="AND (&&)" value={myAge >= 18 && hasID} color="indigo" />
            <StatCard label="OR (||)" value={isAdmin || isTeacher} color="indigo" />
            <StatCard label="NOT (!)" value={!loggedIn} color="indigo" />
          </div>
        </section>

        {/* Increment / Decrement */}
        <section className="rounded-2xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-700">
            Increment / Decrement
          </h2>
          <p className="text-sm text-slate-600">
            Final counter value (1 → ++ → ++ → --):{" "}
            <span className="font-semibold text-slate-800">{counter}</span>
          </p>
        </section>

        <footer className="mt-10 text-center text-xs text-slate-400">
          Open the browser console to see every logged step.
        </footer>
      </div>
    </div>
  );
}

export default App;