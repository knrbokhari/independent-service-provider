import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h2
        className="mt-50px mb-5 text-white text-center"
        style={{ fontSize: "35px" }}
      >
        Blogs
      </h2>
      <div className="text-white">
        <h3 className="mt-5">
          1. Difference between `authorization` and `authentication`?
        </h3>
        <p className="fs-4">
          Ans: authentication হল কেউ কে তা যাচাই করার প্রক্রিয়া। authentication
          হল সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা
          হয়। authentication ব্যবহার করা হয় users যাচাই করার জন্য।
          authentication হলঅ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। যেখানে
          authorization হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং
          ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। authorization
          প্রক্রিয়া, ব্যক্তি বা ব্যবহারকারীর কর্তৃপক্ষ সম্পদ অ্যাক্সেস করার
          জন্য চেক করা হয়। এটা নির্ধারণ করে ব্যবহারকারীর কি কি অনুমতি আছে।
        </p>
        <h3 className="mt-5">
          2. Why are you using `firebase`? What other options do you have to
          implement authentication?
        </h3>
        <p className="fs-4">
          Ans: Firebase ব্যবহার করা হয় যখন আপনি নিজের ব্যাকএন্ড ডেভেলপ করতে অনেক
          সময় ব্যয় করতে চান না। এটি দ্রুত development এর জন্য ব্যবহার করা হয়।
          Firebase এ সার্ভার, Hosting ইত্যাদির যত্ন নিতে হয় না, গুগল এটি যত্ন
          নেয়। Firebase ছাড়াই authentication বাস্তবায়নের অন্যান্য বিকল্প
          রয়েছে। উদাহরণ:
          <ul>
            <li>Back4App. ... </li>
            <li>AWS Amplify. ... </li>
            <li>Kuzzle. ... </li>
            <li>Couchbase. ... </li>
            <li>NativeScript. ... </li>
            <li>RxDB. ... </li>
            <li>Flutter.</li>
          </ul>
        </p>
        <h3 className="mt-5">
          3. What other services does `firebase` provide other than
          authentication?
        </h3>
        <p className="fs-4">
          Ans: There are many services which Firebase provides:
          <ul>
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
