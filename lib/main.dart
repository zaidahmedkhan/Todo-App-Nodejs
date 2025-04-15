import 'package:flutter/material.dart';
import 'package:todo_app_nodejs/screens/signup_screen.dart';

void main() async {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(),
      home: SignUpPage(),
    );
  }
}
