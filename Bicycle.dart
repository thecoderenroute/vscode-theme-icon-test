class Bicycle {
  int cadence;
  int _speed = 0;
  int gear;

  Bicycle(this.cadence, this.gear);

  int get speed => _speed;

  @override
  String toString() => 'Bicycle: $speed mph';
}

void main(List<String> args) {
  var bike = Bicycle(2, 1);
  print(bike);
}
